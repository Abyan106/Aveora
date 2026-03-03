import timeline from "../data/timeline";

function Timeline() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl text-center font-semibold mb-16">
          Timeline Perjalanan
        </h2>

        <div className="relative">

          {/* Garis */}
          <div className="absolute top-10 left-0 w-full h-0.5 bg-neutral-200"></div>

          {/* Scroll Container */}
          <div className="flex gap-16 overflow-x-auto pb-6 hide-scrollbar">

            {timeline.map((item) => (
              <div
                key={item.id}
                className="relative min-w-48 text-center shrink-0"
              >
                {/* Dot */}
                <div className="w-6 h-6 bg-neutral-800 rounded-full mx-auto mb-6 relative z-10"></div>

                {/* Content */}
                <p className="font-semibold text-lg">{item.year}</p>
                <p className="text-sm text-neutral-500 mb-3">
                  {item.title}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Timeline;