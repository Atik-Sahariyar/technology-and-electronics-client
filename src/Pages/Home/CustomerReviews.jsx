import { useEffect, useState } from 'react';

const CustomerReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch customer reviews and testimonials from your API
    const fetchReviews = async () => {
      try {
        const response = await fetch('http://localhost:5700/customerReviews'); // Replace with your API endpoint for customer reviews
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching customer reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <h2 className="text-3xl font-semibold mb-4">Customer Reviews and Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white rounded shadow p-4">
            <h3 className="text-lg font-semibold mb-2">{review.customerName}</h3>
            <p className="text-gray-700">{review.comment}</p>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-gray-900">{review.date}</span>
              <div className="flex items-center">
                {/* You can add star ratings or other review indicators here */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReviews;
