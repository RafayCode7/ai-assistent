import './globals.css';

export const metadata = {
  title: 'Vocaal Flow AI',
  description: 'AI-powered voice assistant to enhance communication efficiency.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        
        {children}
        
      </body>
    </html>
  );
}
