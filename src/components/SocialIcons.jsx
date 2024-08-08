import React from "react";

const SocialIcons = () => {
  return (
    <ul className="flex justify-center items-center space-x-4 list-none">
      {/* LinkedIn Icon */}
      <li className="relative group">
        <a
          href="https://linkedin.com/"
          aria-label="LinkedIn"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 transition-transform transform hover:scale-110 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-[#0274b3] transition-all duration-300 ease-in-out group-hover:h-full h-0 rounded-full"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-linkedin relative z-10"
            viewBox="0 0 16 16"
          >
            <path
              d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
              fill="currentColor"
            />
          </svg>
        </a>
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm bg-black p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          LinkedIn
        </div>
      </li>
      {/* GitHub Icon */}
      <li className="relative group">
        <a
          href="https://www.github.com/"
          aria-label="GitHub"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 transition-transform transform hover:scale-110 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-[#24262a] transition-all duration-300 ease-in-out group-hover:h-full h-0 rounded-full"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-github relative z-10"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
              fill="currentColor"
            />
          </svg>
        </a>
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm bg-black p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          GitHub
        </div>
      </li>
      {/* Instagram Icon */}
      <li className="relative group">
        <a
          href="https://www.instagram.com/"
          aria-label="Instagram"
          className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray-700 transition-transform transform hover:scale-110 hover:shadow-lg"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#405de6] via-[#5b51db] to-[#fd1f1f] transition-all duration-300 ease-in-out group-hover:h-full h-0 rounded-full"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-instagram relative z-10"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 1 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.22c1.107 0 1.344.01 1.818.026.469.016.72.072.885.12.282.061.442.13.55.217.095.095.156.266.217.549.048.167.104.419.12.888.016.475.026.711.026 1.818s-.01 1.343-.026 1.818c-.016.469-.072.72-.12.885-.061.282-.13.442-.217.55-.095.095-.266.156-.549.217-.167.048-.419.104-.888.12-.475.016-.711.026-1.818.026s-1.344-.01-1.818-.026c-.469-.016-.72-.072-.885-.12a1.569 1.569 0 0 1-.55-.217c-.095-.095-.156-.266-.217-.549-.048-.167-.104-.419-.12-.888-.016-.475-.026-.711-.026-1.818s.01-1.344.026-1.818c.016-.469.072-.72.12-.885.061-.282.13-.442.217-.55.095-.095.266-.156.549-.217.167-.048.419-.104.888-.12.475-.016.711-.026 1.818-.026zM8 4.668a3.333 3.333 0 1 0 0 6.666 3.333 3.333 0 0 0 0-6.666zm0 1.333a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.002-1.172a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92"
              fill="currentColor"
            />
          </svg>
        </a>
        <div className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 text-white text-sm bg-black p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Instagram
        </div>
      </li>
    </ul>
  );
};

export default SocialIcons;
