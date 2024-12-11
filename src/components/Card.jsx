import Link from 'next/link';
import clsx from 'clsx';

function ChevronRightIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.75 5.75 9.25 8l-2.5 2.25"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Card({ as: Component = 'div', className, children }) {
  return (
    <Component
      className={clsx(
        className,
        'group relative flex flex-col items-start border border-green-400 dark:border-yellow-400 rounded-lg p-4 hover:shadow-lg'
      )}
    >
      {children}
    </Component>
  );
}

Card.Link = function CardLink({ children, ...props }) {
  return (
    <Link
      className="text-green-400 dark:text-yellow-400"
      {...props}
    >
      {children}
    </Link>
  );
};

Card.Title = function CardTitle({ as: Component = 'h2', href, children }) {
  return (
    <Component className="text-lg font-semibold font-mono tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

Card.Description = function CardDescription({ children }) {
  return (
    <p className="relative z-10 mt-2 text-sm font-mono text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
};

Card.Cta = function CardCta({ children }) {
  return (
    <div
      aria-hidden="true"
      className="relative z-10 mt-4 flex items-center text-sm font-semibold text-green-400 dark:text-yellow-400"
    >
      {children}
      <ChevronRightIcon className="ml-1 h-4 w-4 stroke-current" />
    </div>
  );
};
