import clsx from "clsx";

// Button renders either a <button> or an <a> when `href` is provided.
const Button = ({ id, title, rightIcon, leftIcon, containerClass, href, target = "_self" }) => {
  const content = (
    <>
      {leftIcon}

      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>

      {rightIcon}
    </>
  );

  const classes = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
    containerClass
  );

  if (href) {
    // open external links in a new tab by default
    const rel = target === "_blank" ? "noopener noreferrer" : undefined;
    return (
      <a id={id} href={href} target={target} rel={rel} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button id={id} className={classes}>
      {content}
    </button>
  );
};

export default Button;
