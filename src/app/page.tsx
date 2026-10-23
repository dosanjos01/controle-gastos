import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/transacoes">pagina transacoes</Link> <br />
      <Link href="/transacoes/nova">pagina nova transacao</Link> <br />
      <Link href="/resumo">pagina resumo</Link>
    </div>
  );
}
