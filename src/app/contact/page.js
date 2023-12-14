import PageHeaders from "@/components/PageHeaders";

export default function ContactPage() {
  return (
    <div>
      <PageHeaders
        h1Text={"Auto Caption"}
        h2Text={"Generate captions for your videos automatically"}
      />

      <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto p-4 text-center">
        <a href="https://www.swarupsapkota.com.np" target="_blank">
          <h3 className="font-bold text-3xl">Visit my site</h3>
        </a>
        <a href="mailto:swarupsapkota@gmail.com" target="_blank">
          <h4 className="underline">E-mail me</h4>
        </a>
      </div>
    </div>
  );
}
