export default function Footer() {
  return (
    <div className="fixed bottom-0 m-9">
      <h2 className="text-xs tracking-widest text-gray-400 mb-4">NETWORK</h2>
      <ul>
        <li>jorgegabrielbd.jj@gmail.com</li>
        <li>
          <a href="https://www.linkedin.com/in/jorgedorio/" target="_blank">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/jorgedorio" target="_blank">
            GitHub
          </a>
        </li>
      </ul>

      <p className="text-xs text-gray-400 mt-4">
        You can see the source code of this website{" "}
        <a
          className="font-bold underline"
          href="https://github.com/JorgeDorio/personal-website"
          target="_blank"
        >
          here
        </a>
        . Feel free to collaborate
      </p>
    </div>
  );
}
