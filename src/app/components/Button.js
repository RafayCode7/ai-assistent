export default function Button({ label, className, onClick }) {
    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-md font-semibold hover:opacity-90 transition ${className}`}
      >
        {label}
      </button>
    );
  }
  