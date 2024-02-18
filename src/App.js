import InvoiceForm from './components/InvoiceForm';
import Hero from './components/Hero';
function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="mx-auto max-w-7xl">
        <Hero/>
        <InvoiceForm />
      </div>
    </div>
  );
}

export default App;
