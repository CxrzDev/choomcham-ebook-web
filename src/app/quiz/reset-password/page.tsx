'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../service/supabase'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const handleReset = async () => {
      // 1. Check for tokens in the URL (from our custom email link)
      // Hash part: #access_token=...&refresh_token=...&type=recovery
      // OR Query part (if we set it that way): ?access_token=...

      const hash = window.location.hash.substring(1);
      const query = new URLSearchParams(window.location.search);
      const hashParams = new URLSearchParams(hash);

      const accessToken = hashParams.get('access_token') || query.get('access_token');
      const refreshToken = hashParams.get('refresh_token') || query.get('refresh_token');
      const type = hashParams.get('type') || query.get('type');

      if (accessToken && refreshToken) {
        setIsChecking(true);
        console.log("Found tokens in URL, setting session...");

        try {
          // Manually set the session using the tokens from the email
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          });

          if (error) {
            console.error('Error setting session:', error);
            setError('ลิงก์รีเซ็ตรหัสผ่านไม่ถูกต้องหรือหมดอายุแล้ว');
          } else {
            console.log("Session set successfully via tokens", data);
            // Verify again if we are really logged in
            const { data: userData, error: userError } = await supabase.auth.getUser();
            if (userData?.user) {
              console.log("User verified:", userData.user.email);
            } else {
              setError('ไม่สามารถยืนยันตัวตนได้ กรุณาลองใหม่');
            }
          }
        } catch (err) {
          console.error('Unexpected error handling tokens:', err);
          setError('เกิดข้อผิดพลาดในการตรวจสอบลิงก์');
        } finally {
          setIsChecking(false);
        }
      } else {
        // Fallback: Check if session already exists (maybe redirected properly by Supabase magic link)
        checkRecoverySession();
      }
    };

    const checkRecoverySession = async () => {
      try {
        const { data, error } = await supabase.auth.getUser()
        if (error || !data.user) {
          // If no session and no tokens in URL
          setError('ลิงก์รีเซ็ตรหัสผ่านไม่ถูกต้องหรือหมดอายุแล้ว กรุณากดลืมรหัสผ่านใหม่อีกครั้ง')
        }
      } catch (err) {
        setError('ไม่สามารถตรวจสอบลิงก์รีเซ็ตรหัสผ่านได้ กรุณาลองใหม่')
      } finally {
        setIsChecking(false)
      }
    }

    handleReset();
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (password.length < 6) {
      setError('รหัสผ่านควรมีอย่างน้อย 6 ตัวอักษร')
      return
    }

    if (password !== confirmPassword) {
      setError('รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน')
      return
    }

    setIsLoading(true)

    try {
      const { data, error } = await supabase.auth.updateUser({ password })
      if (error) {
        console.error('Error updating password:', error)
        setError(error.message || 'ไม่สามารถเปลี่ยนรหัสผ่านได้ กรุณาลองใหม่')
        return
      }

      console.log('Password updated:', data)
      setSuccess(true)
      // เคลียร์ข้อมูล session เก่าให้ผู้ใช้กลับไปล็อกอินใหม่
      await supabase.auth.signOut()
    } catch (err) {
      console.error('Unexpected error updating password:', err)
      setError('เกิดข้อผิดพลาดในการเปลี่ยนรหัสผ่าน กรุณาลองใหม่')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[--dark-blue] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl hero min-h-[60vh] bg-slate-200 rounded-[40px] py-8 px-4 sm:px-10 shadow-xl relative overflow-hidden">
        <div className="w-48 h-48 bg-[#D33666] rounded-full absolute -top-16 -right-20 opacity-60" />
        <div className="w-64 h-64 bg-[#3C4297] rounded-full absolute -bottom-24 -left-24 opacity-50" />
        <div className="w-40 h-40 bg-[#17A78A] rounded-full absolute -top-10 -left-10 opacity-60" />

        <div className="relative z-10 flex flex-col items-center justify-center gap-8">
          <div className="w-full max-w-xl bg-white/90 shadow-2xl rounded-[32px] border border-slate-200 p-8 backdrop-blur-sm">
            <h1 className="text-2xl sm:text-3xl font-bold text-center text-[--yellow] mb-4 italic">
              ตั้งรหัสผ่านใหม่
            </h1>
            <p className="text-sm sm:text-base text-slate-700 mb-6 text-center">
              กรุณาตั้งรหัสผ่านใหม่สำหรับบัญชีของคุณ แล้วใช้รหัสนี้ในการเข้าสู่ระบบหน้า Quiz ครั้งถัดไปค่ะ
            </p>

            {isChecking ? (
              <p className="text-sm text-slate-600 text-center">กำลังตรวจสอบลิงก์รีเซ็ตรหัสผ่าน...</p>
            ) : success ? (
              <div className="space-y-6 text-center">
                <p className="text-sm sm:text-base text-[--green] font-semibold">
                  เปลี่ยนรหัสผ่านเรียบร้อยแล้วค่ะ โปรดเข้าสู่ระบบใหม่ด้วยรหัสผ่านที่ตั้งไว้
                </p>
                <button
                  className="w-full bg-[--green] text-white rounded-full py-3 px-6 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-150"
                  onClick={() => router.push('/quiz')}
                >
                  ไปหน้าเข้าสู่ระบบ Quiz
                </button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    รหัสผ่านใหม่:
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--green]"
                    placeholder="ตั้งรหัสผ่านอย่างน้อย 6 ตัวอักษร"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-800 mb-1">
                    ยืนยันรหัสผ่านใหม่:
                  </label>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[--green]"
                    placeholder="พิมพ์รหัสผ่านใหม่อีกครั้ง"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                {error && (
                  <p className="text-xs text-red-600 font-medium">{error}</p>
                )}
                <button
                  type="submit"
                  className="w-full bg-[--green] text-white rounded-full py-3 px-6 font-semibold text-sm sm:text-base shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-150"
                  disabled={isLoading}
                >
                  {isLoading ? 'กำลังบันทึกรหัสผ่านใหม่...' : 'ยืนยันการเปลี่ยนรหัสผ่าน'}
                </button>
                <button
                  type="button"
                  className="w-full mt-3 rounded-full border border-slate-300 bg-white/80 py-2 text-xs sm:text-sm text-slate-700 hover:bg-slate-100 transition-colors"
                  onClick={() => router.push('/quiz')}
                >
                  กลับไปหน้า Quiz
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

