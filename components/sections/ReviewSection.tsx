import { Star } from "lucide-react";
import React from "react";
import { REVIEWS } from "../../constants";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const ReviewSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-light-gray">
      <div className="container mx-auto px-6">
        <SectionTitle title="お客様の声" subtitle="Testimonials" />
        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <Card
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              {/* 顔写真 */}
              <img
                src={`/${review.image}`}
                alt={review.author}
                className="w-24 h-24 rounded-full object-cover mb-4 shadow-md border border-gray-200"
              />

              {/* 星評価 */}
              <div className="flex mb-3 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < review.rating
                        ? "text-gold fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/* コメント */}
              <p className="text-gray-800 italic mb-4 flex-grow leading-relaxed">
                &quot;{review.quote}&quot;
              </p>

              {/* 名前とプラン */}
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
