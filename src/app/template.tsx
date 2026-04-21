export default async function MainTemplate({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="app-template">{children}</div>;
}
