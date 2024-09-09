"use client";
export default function Footer() {
  return (
    <footer className="w-full min-h-16 bg-red-400 text-green-400 p-4 flex justify-center items-center">
      <p className="text-center">
        © {new Date().getFullYear()} Tu Empresa. Todos los derechos reservados.
      </p>
    </footer>
  );
}
