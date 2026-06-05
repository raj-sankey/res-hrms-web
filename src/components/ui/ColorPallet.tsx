export default function ColorPallet() {
    return (
        <div className="flex flex-1 flex-col items-center justify-center bg-background px-6 py-16">
            {/* Hero Section */}
            <main className="flex w-full max-w-4xl flex-col items-center gap-10 text-center">
                {/* Logo mark */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary shadow-lg">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8"
                    >
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                </div>

                {/* Heading */}
                <div className="flex flex-col items-center gap-4">
                    <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-5xl">
                        RES <span className="text-primary">HRMS</span>
                    </h1>
                    <p className="max-w-lg text-lg leading-relaxed text-neutral-500">
                        A modern Human Resource Management System built for efficiency,
                        transparency, and your team&apos;s growth.
                    </p>
                </div>

                {/* Action Buttons — demonstrating palette button variants */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {/* Primary Button */}
                    <button
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md active:scale-[0.98]"
                        style={{ transitionDuration: "var(--transition-fast)" }}
                    >
                        Get Started
                    </button>

                    {/* Secondary (Inverted) Button */}
                    <button
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-secondary px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-secondary-hover hover:shadow-md active:scale-[0.98]"
                        style={{ transitionDuration: "var(--transition-fast)" }}
                    >
                        Dashboard
                    </button>

                    {/* Outlined Button */}
                    <button
                        className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 text-sm font-semibold text-secondary transition-all hover:bg-neutral-100 active:scale-[0.98]"
                        style={{ transitionDuration: "var(--transition-fast)" }}
                    >
                        Learn More
                    </button>
                </div>

                {/* Color Palette Preview Cards */}
                <div className="mt-6 grid w-full max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
                    {/* Primary */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-sm transition-all hover:shadow-md">
                        <div className="h-20 bg-primary transition-all group-hover:h-24" />
                        <div className="p-3">
                            <p className="text-xs font-semibold text-secondary">Primary</p>
                            <p className="text-xs text-neutral-400">#6366F1</p>
                        </div>
                    </div>

                    {/* Secondary */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-sm transition-all hover:shadow-md">
                        <div className="h-20 bg-secondary transition-all group-hover:h-24" />
                        <div className="p-3">
                            <p className="text-xs font-semibold text-secondary">Secondary</p>
                            <p className="text-xs text-neutral-400">#0F172A</p>
                        </div>
                    </div>

                    {/* Tertiary */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-sm transition-all hover:shadow-md">
                        <div className="h-20 bg-tertiary transition-all group-hover:h-24" />
                        <div className="p-3">
                            <p className="text-xs font-semibold text-secondary">Tertiary</p>
                            <p className="text-xs text-neutral-400">#F59E0B</p>
                        </div>
                    </div>

                    {/* Neutral */}
                    <div className="group flex flex-col overflow-hidden rounded-xl border border-border bg-surface-elevated shadow-sm transition-all hover:shadow-md">
                        <div className="h-20 bg-neutral-50 border-b border-border transition-all group-hover:h-24" />
                        <div className="p-3">
                            <p className="text-xs font-semibold text-secondary">Neutral</p>
                            <p className="text-xs text-neutral-400">#F8FAFC</p>
                        </div>
                    </div>
                </div>

                {/* Typography preview */}
                <div className="mt-4 flex w-full max-w-2xl flex-col gap-4 rounded-xl border border-border bg-surface-elevated p-6 text-left shadow-sm">
                    <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                        Typography — Inter
                    </p>
                    <h2 className="text-3xl font-bold text-secondary">
                        Headline
                    </h2>
                    <p className="text-base leading-relaxed text-neutral-600">
                        Body text uses Inter at regular weight for maximum readability. This
                        is a sample paragraph to demonstrate how body copy looks in the
                        design system.
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center rounded-md bg-primary-50 px-3 py-1 text-xs font-medium text-primary">
                            Label
                        </span>
                        <span className="inline-flex items-center rounded-md bg-tertiary-50 px-3 py-1 text-xs font-medium text-tertiary">
                            Badge
                        </span>
                        <span className="inline-flex items-center rounded-md bg-success-bg px-3 py-1 text-xs font-medium text-success">
                            Active
                        </span>
                    </div>
                </div>
            </main>
        </div>
    );
}