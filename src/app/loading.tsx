import Loading from "@/components/shared/Loading";

/**
 * Root loading boundary for Next.js App Router.
 * Automatically shown during page transitions and server-side streaming.
 */
export default function GlobalLoading() {
  return <Loading fullScreen size="lg" text="Loading ByteSpace" />;
}
