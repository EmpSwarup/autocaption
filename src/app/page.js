export default function Home() {
  return (
    <main className="p-4 max-w-2xl mx-auto">
      <header className="flex justify-between mb-4">
        <a href="">AutoCaption</a>
        <nav className="flex gap-6">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Contact</a>
        </nav>
      </header>
      <div>
        <h1>Create epic captions to your videos</h1>
        <h2>Just upload your video and we will do the rest.</h2>
      </div>
      <div>
        <button>Choose file</button>
      </div>
    </main>
  );
}
