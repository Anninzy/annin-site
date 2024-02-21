type Props = {
  href: string;
  name: string;
};

function Link(props: Props) {
  function shiftBackgroundAndPattern() {
    //TODO
  }

  return (
    <a
      href={props.href}
      class="menu-item"
      onMouseOver={shiftBackgroundAndPattern}
    >
      {props.name}
    </a>
  );
}

export default function () {
  return (
    <>
      <Link href="/apps" name="Apps" />
      <Link href="/blog" name="Blog" />
      <Link href="/portfolio" name="Portfolio" />
      <Link href="/about" name="About" />
    </>
  );
}
