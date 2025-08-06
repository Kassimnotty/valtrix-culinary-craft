-- Create courses table first
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  price_tsh INTEGER NOT NULL DEFAULT 0,
  duration_hours INTEGER,
  level TEXT DEFAULT 'beginner',
  category TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Create policy for courses
CREATE POLICY "Courses are viewable by everyone" ON public.courses FOR SELECT USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_courses_updated_at
  BEFORE UPDATE ON public.courses
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample courses
INSERT INTO public.courses (title, description, price_tsh, duration_hours, level, category) VALUES
('Food Safety & Hygiene', 'Essential food safety practices for professional kitchens', 45000, 8, 'beginner', 'Safety'),
('Basic Knife Skills', 'Master fundamental knife techniques and cuts', 55000, 6, 'beginner', 'Skills'),
('Meat & Poultry Preparation', 'Professional meat handling and cooking techniques', 75000, 12, 'intermediate', 'Protein'),
('Stocks, Soups & Sauces', 'Foundation of professional cooking - mother sauces', 65000, 10, 'intermediate', 'Sauces'),
('Baking & Pastry Fundamentals', 'Basic bread, pastry and dessert techniques', 85000, 16, 'intermediate', 'Baking'),
('Menu Planning & Cost Control', 'Business skills for culinary professionals', 60000, 8, 'advanced', 'Business'),
('Fish & Seafood Cookery', 'Professional fish preparation and cooking methods', 70000, 10, 'intermediate', 'Seafood'),
('Vegetarian & Vegan Cooking', 'Modern plant-based cooking techniques', 50000, 8, 'beginner', 'Special'),
('Advanced Plating & Presentation', 'Professional food styling and presentation', 80000, 6, 'advanced', 'Presentation');