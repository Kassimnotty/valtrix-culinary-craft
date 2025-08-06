-- Add Tanzanian event packages table
CREATE TABLE public.tanzanian_packages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  price_tsh INTEGER NOT NULL,
  minimum_people INTEGER NOT NULL DEFAULT 10,
  description TEXT,
  image_url TEXT,
  starters TEXT[],
  main_dishes TEXT[],
  accompaniments TEXT[],
  vegetables TEXT[],
  salads TEXT[],
  fruits TEXT[],
  dessert TEXT[],
  drinks TEXT[],
  add_ons TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add course enrollments table
CREATE TABLE public.course_enrollments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  enrolled_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  payment_status TEXT DEFAULT 'pending',
  payment_method TEXT,
  payment_reference TEXT,
  progress_percentage INTEGER DEFAULT 0,
  completed_at TIMESTAMP WITH TIME ZONE,
  certificate_url TEXT,
  UNIQUE(user_id, course_id)
);

-- Add course lessons table
CREATE TABLE public.course_lessons (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT,
  duration_minutes INTEGER,
  order_index INTEGER NOT NULL,
  is_preview BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add lesson progress table
CREATE TABLE public.lesson_progress (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  lesson_id UUID NOT NULL REFERENCES public.course_lessons(id) ON DELETE CASCADE,
  completed_at TIMESTAMP WITH TIME ZONE,
  watch_time_seconds INTEGER DEFAULT 0,
  UNIQUE(user_id, lesson_id)
);

-- Enable RLS on new tables
ALTER TABLE public.tanzanian_packages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_lessons ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_progress ENABLE ROW LEVEL SECURITY;

-- RLS Policies for tanzanian_packages
CREATE POLICY "Tanzanian packages are viewable by everyone" ON public.tanzanian_packages FOR SELECT USING (true);

-- RLS Policies for course_enrollments
CREATE POLICY "Users can view their own enrollments" ON public.course_enrollments FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own enrollments" ON public.course_enrollments FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own enrollments" ON public.course_enrollments FOR UPDATE USING (auth.uid() = user_id);

-- RLS Policies for course_lessons
CREATE POLICY "Course lessons are viewable by everyone" ON public.course_lessons FOR SELECT USING (true);

-- RLS Policies for lesson_progress
CREATE POLICY "Users can view their own lesson progress" ON public.lesson_progress FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can create their own lesson progress" ON public.lesson_progress FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users can update their own lesson progress" ON public.lesson_progress FOR UPDATE USING (auth.uid() = user_id);

-- Add triggers for updated_at
CREATE TRIGGER update_tanzanian_packages_updated_at
  BEFORE UPDATE ON public.tanzanian_packages
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample Tanzanian packages
INSERT INTO public.tanzanian_packages (name, price_tsh, minimum_people, description, starters, main_dishes, accompaniments, vegetables, salads, fruits, dessert, drinks) VALUES
('Classic Tanzanian Wedding Package', 150000, 50, 'Traditional wedding feast with authentic Tanzanian flavors', 
 ARRAY['Samosas', 'Chapati rolls', 'Mandazi'], 
 ARRAY['Pilau rice', 'Nyama choma', 'Fish curry', 'Chicken stew'], 
 ARRAY['Ugali', 'Rice', 'Chapati'], 
 ARRAY['Mchuzi wa nazi', 'Mboga za majani'], 
 ARRAY['Kachumbari', 'Avocado salad'], 
 ARRAY['Watermelon', 'Pineapple', 'Oranges'], 
 ARRAY['Halwa', 'Kashata'], 
 ARRAY['Tangawizi', 'Sodas', 'Fresh juices']),

('Corporate Lunch Package', 25000, 20, 'Professional lunch for corporate events', 
 ARRAY['Mini samosas', 'Bread rolls'], 
 ARRAY['Chicken biriani', 'Beef stew', 'Fish fillet'], 
 ARRAY['Rice', 'Ugali'], 
 ARRAY['Mixed vegetables'], 
 ARRAY['Garden salad'], 
 ARRAY['Seasonal fruits'], 
 ARRAY['Ice cream'], 
 ARRAY['Tea', 'Coffee', 'Juice']),

('Birthday Celebration Package', 35000, 15, 'Special birthday celebration with Tanzanian favorites', 
 ARRAY['Chicken wings', 'Spring rolls'], 
 ARRAY['Pilau', 'Grilled chicken', 'Beef curry'], 
 ARRAY['Rice', 'Chapati'], 
 ARRAY['Sukuma wiki', 'Carrots'], 
 ARRAY['Coleslaw'], 
 ARRAY['Mixed fruits'], 
 ARRAY['Birthday cake', 'Cookies'], 
 ARRAY['Sodas', 'Juice', 'Water']);

-- Insert sample course lessons
INSERT INTO public.course_lessons (course_id, title, description, duration_minutes, order_index, is_preview) 
SELECT id, 'Introduction to Food Safety', 'Basic principles of food hygiene and safety standards', 45, 1, true
FROM public.courses WHERE title = 'Food Safety & Hygiene' LIMIT 1;

INSERT INTO public.course_lessons (course_id, title, description, duration_minutes, order_index, is_preview) 
SELECT id, 'HACCP Principles', 'Understanding Hazard Analysis and Critical Control Points', 60, 2, false
FROM public.courses WHERE title = 'Food Safety & Hygiene' LIMIT 1;