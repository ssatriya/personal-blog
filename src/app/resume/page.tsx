import dynamic from "next/dynamic";

const PageWrapperComponent = dynamic(
  () => {
    return import("@/components/pdf-viewer");
  },
  {
    ssr: false,
    loading: () => (
      <div className="relative w-full min-h-screen flex items-center justify-center">
        <div className="loader" />
      </div>
    ),
  }
);

export default function ResumePage() {
  return <PageWrapperComponent />;
}
