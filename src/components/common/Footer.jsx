function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container py-5 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} DocCare. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
