import ProtectedPage from "@/components/ProtectedPage";

export default function DashboardPage() {
  return (
    <ProtectedPage>
      <div>
        <p>hello world</p>
      </div>
    </ProtectedPage>
  );
}
