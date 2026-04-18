export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-[#0a0a0f]" />

      {/* Glow 1 */}
      <div className="absolute top-[-20%] left-[-10%] w-125 h-125 bg-purple-600/20 rounded-full blur-[120px]" />

      {/* Glow 2 */}
      <div className="absolute bottom-[-20%] right-[-10%] w-125 h-125 bg-blue-600/20 rounded-full blur-[120px]" />

      {/* Glow center */}
      <div className="absolute top-[30%] left-[40%] w-75 h-75 bg-pink-500/10 rounded-full blur-[100px]" />

      <div
        className="absolute w-125 h-125 bg-purple-600/20 rounded-full blur-[120px]"
        style={{ animation: "float 8s ease-in-out infinite" }}
      />
    </div>
  );
}
