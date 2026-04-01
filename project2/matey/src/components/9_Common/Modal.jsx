import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./Common.css";

const Modal = ({
  isOpen,
  onClose,
  title = "안내",
  children,
  footer,
  closeOnOverlay = true,
  closeOnEsc = true,
  size = "md",
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape" && closeOnEsc) {
        onClose?.();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeOnEsc, onClose]);

  if (!isOpen) return null;

  const modalSizeClass =
    size === "sm"
      ? "matey-modal__dialog--sm"
      : size === "lg"
      ? "matey-modal__dialog--lg"
      : "matey-modal__dialog--md";

  return ReactDOM.createPortal(
    <div
      className="matey-modal"
      onClick={() => {
        if (closeOnOverlay) onClose?.();
      }}
    >
      <div
        className={`matey-modal__dialog ${modalSizeClass}`}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={title}
      >
        <div className="matey-modal__header">
          <h2>{title}</h2>
          <button
            type="button"
            className="matey-modal__close"
            onClick={onClose}
            aria-label="모달 닫기"
          >
            ✕
          </button>
        </div>

        <div className="matey-modal__body">{children}</div>

        {footer && <div className="matey-modal__footer">{footer}</div>}
      </div>
    </div>,
    document.body
  );
};

export default Modal;
