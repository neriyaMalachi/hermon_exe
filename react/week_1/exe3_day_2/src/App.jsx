import { useMemo, useState } from "react";
import "./App.css";

const PRICE_PER_SCOOP = 5;

const initialFlavors = [
  { name: "Vanilla", isSoldOut: false, scoopsSelected: 0, stockLeft: 3 },
  { name: "Chocolate", isSoldOut: false, scoopsSelected: 0, stockLeft: 2 },
  { name: "Strawberry", isSoldOut: true, scoopsSelected: 0, stockLeft: 0 }, // sold out
  { name: "Mint", isSoldOut: false, scoopsSelected: 0, stockLeft: 4 },
  { name: "Cookie Dough", isSoldOut: false, scoopsSelected: 0, stockLeft: 1 },
];

export default function App() {
  const [flavors, setFlavors] = useState(initialFlavors);
  const [scoopLimit] = useState(5);
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const totalScoops = useMemo(
    () => flavors.reduce((sum, f) => sum + f.scoopsSelected, 0),
    [flavors]
  );

  const price = totalScoops * PRICE_PER_SCOOP;
  const limitReached = totalScoops >= scoopLimit;

  const visibleFlavors = showOnlyAvailable
    ? flavors.filter((f) => !f.isSoldOut)
    : flavors;

  const noFlavorsToShow = showOnlyAvailable && visibleFlavors.length === 0;

  function addScoop(index) {
    // block if limit reached
    if (totalScoops >= scoopLimit) return;

    setFlavors((prev) =>
      prev.map((f, i) => {
        if (i !== index) return f;
        if (f.isSoldOut) return f;
        if (f.stockLeft <= 0) return { ...f, isSoldOut: true };

        const newStock = f.stockLeft - 1;
        const willBeSoldOut = newStock <= 0;

        return {
          ...f,
          scoopsSelected: f.scoopsSelected + 1,
          stockLeft: newStock,
          isSoldOut: willBeSoldOut,
        };
      })
    );
  }

  function removeScoop(index) {
    setFlavors((prev) =>
      prev.map((f, i) => {
        if (i !== index) return f;
        if (f.scoopsSelected <= 0) return f;

        // removing scoop returns stock back (so it can become available again)
        return {
          ...f,
          scoopsSelected: f.scoopsSelected - 1,
          stockLeft: f.stockLeft + 1,
          isSoldOut: false,
        };
      })
    );
  }

  function clearOrder() {
    setFlavors((prev) =>
      prev.map((f) => ({
        ...f,
        scoopsSelected: 0,
        // keep current sold-out/stock as-is (simple). You can reset to initial if you want.
      }))
    );
  }

  return (
    <div className="page">
      <header className="header">
        <h1>Ice-Cream Kiosk</h1>

        <label className="toggle">
          <input
            type="checkbox"
            checked={showOnlyAvailable}
            onChange={(e) => setShowOnlyAvailable(e.target.checked)}
          />
          <span>Show only available</span>
        </label>
      </header>

      {/* Notice Area (only when needed) */}
      {(limitReached || noFlavorsToShow) && (
        <div className="notice">
          {limitReached && (
            <div>🍦 Scoop limit reached (max {scoopLimit}).</div>
          )}
          {noFlavorsToShow && <div>No flavors to show.</div>}
        </div>
      )}

      {/* Flavor List */}
      <main className="grid">
        {noFlavorsToShow ? null : (
          visibleFlavors.map((f) => (
            <div key={f.name} className={`card ${f.isSoldOut ? "soldOut" : ""}`}>
              <div className="topRow">
                <div className="name">{f.name}</div>
                {f.isSoldOut && <span className="badge">Sold Out</span>}
              </div>

              <div className="info">
                <div>
                  Scoops: <b>{f.scoopsSelected}</b>
                </div>

                {!f.isSoldOut && (
                  <div className="stock">Stock left: {f.stockLeft}</div>
                )}
              </div>

              <div className="controls">
                <button
                  onClick={() => removeScoop(indexInOriginal(f.name, flavors))}
                  disabled={f.scoopsSelected === 0}
                >
                  –
                </button>

                <button
                  onClick={() => addScoop(indexInOriginal(f.name, flavors))}
                  disabled={f.isSoldOut || limitReached}
                >
                  +
                </button>
              </div>
            </div>
          ))
        )}
      </main>

      {/* Order Summary (always visible) */}
      <section className="summary">
        <h2>Order Summary</h2>
        <div className="summaryRow">
          <span>Total scoops:</span>
          <b>{totalScoops}</b>
        </div>
        <div className="summaryRow">
          <span>Price:</span>
          <b>{price}₪</b>
        </div>

        {totalScoops === 0 && <div className="empty">Your order is empty.</div>}

        <button className="clear" onClick={clearOrder} disabled={totalScoops === 0}>
          Clear Order
        </button>
      </section>
    </div>
  );
}

/**
 * When filtering, the index in visibleFlavors is not the same as the index in flavors.
 * So we find the index by name to update the correct item.
 */
function indexInOriginal(name, flavors) {
  return flavors.findIndex((f) => f.name === name);
}
