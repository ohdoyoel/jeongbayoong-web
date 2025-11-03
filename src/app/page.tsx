export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <main className="flex flex-col min-h-screen w-full py-32 px-16 bg-red-500">
        <h1 className="text-4xl font-bold">정바융웹입니다.</h1>
        <h2 className="text-2xl font-bold">정바융웹입니다.</h2>
        <h3 className="text-xl font-bold">정바융웹입니다.</h3>
        <h4 className="text-lg font-bold">정바융웹입니다.</h4>
        <h5 className="text-base font-bold">정바융웹입니다.</h5>
        <h6 className="text-sm font-bold">정바융웹입니다.</h6>
        <a href="/blog">블로그</a>
      </main>
    </div>
  );
}
