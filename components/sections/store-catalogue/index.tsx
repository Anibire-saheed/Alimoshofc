"use client";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { products, formatPrice } from "@/lib/inner-content";
import { Button } from "@/components/ui/button";
import { addToCart, setQuantity, removeFromCart } from "@/lib/store/shop";
import type { RootState } from "@/lib/store";
function ProductCard({ product }: { product: (typeof products)[number] }) {
  const [size, setSize] = useState(product.sizes[0]);
  const dispatch = useDispatch();
  return (
    <article className="flex flex-col border border-neutral-200">
      <div className="relative aspect-[4/5] bg-[#efefef]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width:640px) 100vw, 340px"
          className="object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs uppercase tracking-widest text-[#54728a]">
          {product.edition}
        </p>
        <h2 className="mt-3 font-heading text-3xl">{product.name}</h2>
        <p className="my-4 flex-1 leading-7">{product.description}</p>
        <p className="mb-5 font-heavy text-xl">{formatPrice(product.price)}</p>
        <label htmlFor={product.id + "size"} className="mb-2 text-sm">
          Size
        </label>
        <select
          id={product.id + "size"}
          value={size}
          onChange={(e) => setSize(e.target.value)}
          className="mb-4 h-11 border border-neutral-300 px-3"
        >
          {product.sizes.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
        <Button
          onClick={() => {
            dispatch(addToCart({ id: product.id, size }));
            toast.success(product.name + " added to your bag.");
          }}
        >
          Add to bag
        </Button>
      </div>
    </article>
  );
}
export function StoreCatalogue() {
  const dispatch = useDispatch();
  const items = useSelector((s: RootState) => s.shop.items);
  const total = items.reduce(
    (sum, item) =>
      sum +
      (products.find((p) => p.id === item.id)?.price || 0) * item.quantity,
    0,
  );
  const order = items
    .map((i) => {
      const p = products.find((p) => p.id === i.id)!;
      return `${p.name} — ${i.size} × ${i.quantity}: ${formatPrice(p.price * i.quantity)}`;
    })
    .join("\n");
  return (
    <section className="mx-auto max-w-[1100px] px-6 py-16">
      <p className="mb-8 border-l-4 border-[#68b04d] bg-[#efefef] p-5 text-sm leading-6">
        Archive catalogue prices from the original club store. Availability and
        current prices must be confirmed by the club. Your bag stays in this
        session; no payment is taken.
      </p>
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      <section
        aria-labelledby="bag-title"
        className="mt-16 border border-neutral-200 p-6 sm:p-9"
      >
        <h2 id="bag-title" className="section-title">
          YOUR BAG ({items.reduce((n, i) => n + i.quantity, 0)})
        </h2>
        {!items.length ? (
          <p className="mt-5 text-neutral-500">
            Your bag is empty. Add a shirt or keepsake above.
          </p>
        ) : (
          <>
            <ul className="my-6 divide-y divide-neutral-200">
              {items.map((item) => {
                const product = products.find((p) => p.id === item.id)!;
                return (
                  <li
                    key={item.id + item.size}
                    className="flex flex-wrap items-center justify-between gap-4 py-5"
                  >
                    <div>
                      <h3 className="font-heavy">{product.name}</h3>
                      <p className="text-sm">
                        {item.size} · {formatPrice(product.price)}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="sr-only" htmlFor={item.id + item.size}>
                        Quantity of {product.name}, {item.size}
                      </label>
                      <select
                        id={item.id + item.size}
                        value={item.quantity}
                        onChange={(e) =>
                          dispatch(
                            setQuantity({
                              ...item,
                              quantity: Number(e.target.value),
                            }),
                          )
                        }
                        className="h-10 border px-3"
                      >
                        {Array.from({ length: 10 }, (_, i) => (
                          <option key={i + 1}>{i + 1}</option>
                        ))}
                      </select>
                      <Button
                        variant="outline"
                        onClick={() => dispatch(removeFromCart(item))}
                      >
                        Remove
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
            <p className="mb-6 font-heavy text-2xl">
              Estimated total: {formatPrice(total)}
            </p>
            <Button asChild>
              <a
                href={
                  "mailto:alimoshofc@gmail.com?subject=" +
                  encodeURIComponent("Club store order enquiry") +
                  "&body=" +
                  encodeURIComponent(
                    "Please confirm availability and current prices for:\n\n" +
                      order +
                      "\n\nEstimated total: " +
                      formatPrice(total),
                  )
                }
              >
                Enquire about this order
              </a>
            </Button>
          </>
        )}
      </section>
    </section>
  );
}
