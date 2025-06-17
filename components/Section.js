export default function Section({children, classes, ariaLabel}) {
    return (
        <section className={classes} aria-label={ariaLabel}>
            {children}
        </section>
    )
}