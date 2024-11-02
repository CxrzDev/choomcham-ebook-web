import { ChevronLeft, ChevronRight } from 'lucide-react';
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const goToNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  return (
    <div className="flex justify-center items-center mt-4 gap-4">
      <button
        onClick={goToPreviousPage}
        disabled={currentPage === 1}
        className="px-3 py-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        <ChevronLeft></ChevronLeft>
      </button>
      <span className="font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>
      <button
        onClick={goToNextPage}
        disabled={currentPage === totalPages}
        className="px-3 py-1 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
      >
        <ChevronRight></ChevronRight>
      </button>
    </div>
  );
};

export default Pagination;
