import { Action } from '@/app/(commuter)/types';

const QuickActions = () => {
  const actions: Action[] = [
    { id: 1, name: 'Track', icon: 'fa-location-dot' },
    { id: 2, name: 'Pay QR', icon: 'fa-qrcode' },
    { id: 3, name: 'Hail', icon: 'fa-hand' },
    { id: 4, name: 'Load', icon: 'fa-mobile' },
    { id: 5, name: 'Bills', icon: 'fa-file-invoice' },
    { id: 6, name: 'More', icon: 'fa-ellipsis' }
  ];

  return (
    <section className="mt-6">
      <h2 className="text-base font-semibold text-gray-800 m-0 mb-4">QUICK ACTIONS</h2>
      <div className="grid grid-cols-3 gap-4">
        {actions.map(action => (
          <div key={action.id} className="flex flex-col items-center p-4 bg-gray-100 rounded-xl cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5">
            <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mb-2">
              <i className={`fas ${action.icon} text-xl`}></i>
            </div>
            <p className="text-sm font-medium text-gray-800 m-0">{action.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuickActions;