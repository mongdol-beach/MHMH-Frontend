import React from "react";
import Modal from "../../elements/Modal";

interface SummaryModalProps {
  isOpen: boolean;
  closeModal: () => void;
  topics: {
    id: number;
    content: string;
    isRecommend: boolean;
    tips: string[];
  }[];
}

const SummaryModal: React.FC<SummaryModalProps> = ({
  isOpen,
  closeModal,
  topics,
}) => {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <h2>모달 제목</h2>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id}>{topic.content}</li> // content를 리스트로 렌더링
        ))}
      </ul>
    </Modal>
  );
};

export default SummaryModal;
