/* eslint-disable react/prop-types */


export default function Header({ children }) {
  return (
    <header className="flex items-center justify-between h-20 border-b-2 bg-stone-950 font-Vazir border-emerald-400/40">
      {children}

    </header>
  );
}
