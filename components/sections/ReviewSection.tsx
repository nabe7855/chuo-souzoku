
import React from 'react';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { REVIEWS } from '../../constants';
import { Star } from 'lucide-react';

const ReviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionTitle title="お客様の声" subtitle="Testimonials" />
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <Card key={index} className="flex flex-col">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'text-gold fill-current' : 'text-gray-300'}`} />
                ))}
              </div>
              <p className="text-gray-800 italic mb-4 flex-grow">"{review.quote}"</p>
              <div>
                <p className="font-bold text-navy">{review.author}</p>
                <p className="text-sm text-gray-500">{review.details}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewSection;
