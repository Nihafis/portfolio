import * as Toast from "@radix-ui/react-toast";
import { useToast } from "../../hooks/useToast";

export function Toaster() {
  const { toast, setToast } = useToast();

  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        open={toast.open}
        duration={3000}
        onOpenChange={(open) => setToast({ ...toast, open })}
        className="bg-white rounded-md shadow-lg p-4 border border-gray-200 relative data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[state=open]:animate-slideIn data-[state=closed]:animate-slideOut data-[swipe=end]:animate-swipeOut"
      >
        <Toast.Title className="font-semibold text-gray-900">
          {toast.title}
        </Toast.Title>
        <Toast.Description className="text-sm text-gray-600">
          {toast.description}
        </Toast.Description>
        <Toast.Close className="absolute top-2 right-2 text-gray-400 hover:text-gray-600">
          <span className="sr-only">Close</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </Toast.Close>
      </Toast.Root>

      <Toast.Viewport className="fixed bottom-0 right-0 flex flex-col p-4 gap-2 w-[390px] max-w-[100vw] m-0 z-50 outline-none" />
    </Toast.Provider>
  );
}
