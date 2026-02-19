import axios from 'axios';

export const sendLineNotify = async (message: string) => {
    const token = process.env.LINE_NOTIFY_TOKEN;
    if (!token) return;

    try {
        await axios.post(
            'https://notify-api.line.me/api/notify',
            new URLSearchParams({ message }).toString(),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
    } catch (err: any) {
        console.error('Error sending LINE Notify:', err.message);
    }
};
