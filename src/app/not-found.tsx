import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center px-6 py-24 bg-warm-white">
      <p className="font-display text-[80px] md:text-[120px] font-light text-green-pale leading-none mb-6">
        404
      </p>
      <h1 className="font-serif text-xl tracking-[0.12em] text-text-dark mb-4">
        ページが見つかりませんでした
      </h1>
      <p className="font-sans text-sm text-text-mid font-light text-center mb-10 max-w-md leading-[1.8]">
        お探しのページは存在しないか、移動した可能性があります。
      </p>
      <Button href="/" variant="primary">
        トップへ戻る
      </Button>
    </section>
  );
}
