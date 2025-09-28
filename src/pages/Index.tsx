import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');

  const plans = [
    {
      id: 'starter',
      name: 'Стартовый',
      price: '1 990 ₽',
      features: [
        '1 000 просмотров',
        '50 лайков',
        '10 комментариев',
        'Постепенная накрутка 3-5 дней',
        'Безопасное продвижение'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Профессиональный',
      price: '4 990 ₽',
      features: [
        '5 000 просмотров',
        '250 лайков',
        '50 комментариев',
        '100 подписчиков',
        'Постепенная накрутка 5-7 дней',
        'Приоритетная поддержка'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '9 990 ₽',
      features: [
        '10 000 просмотров',
        '500 лайков',
        '100 комментариев',
        '250 подписчиков',
        'Постепенная накрутка 7-10 дней',
        'Гарантия качества',
        '24/7 поддержка'
      ],
      popular: false
    }
  ];

  const faqItems = [
    {
      question: 'Безопасна ли накрутка для моего канала?',
      answer: 'Да, мы используем только безопасные методы постепенного продвижения, которые имитируют естественный рост аудитории.'
    },
    {
      question: 'Как быстро начнется накрутка?',
      answer: 'Накрутка начинается в течение 2-6 часов после оплаты заказа. Мы проводим постепенное увеличение показателей.'
    },
    {
      question: 'Можно ли накрутить подписчиков?',
      answer: 'Да, в тарифах Профессиональный и Премиум включена накрутка живых подписчиков на ваш канал.'
    },
    {
      question: 'Есть ли гарантия на услуги?',
      answer: 'Мы предоставляем гарантию выполнения заказа и возврат средств, если результат не достигнут.'
    }
  ];

  const handleOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!videoUrl || !selectedPlan) {
      alert('Пожалуйста, заполните все поля');
      return;
    }
    alert(`Заказ оформлен! Ссылка: ${videoUrl}, Тариф: ${selectedPlan}`);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Youtube" size={32} className="text-youtube-red" />
              <h1 className="text-2xl font-roboto font-bold text-youtube-dark">
                YouTube Growth
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#services" className="text-youtube-dark hover:text-youtube-red transition-colors">Услуги</a>
              <a href="#pricing" className="text-youtube-dark hover:text-youtube-red transition-colors">Тарифы</a>
              <a href="#faq" className="text-youtube-dark hover:text-youtube-red transition-colors">FAQ</a>
              <a href="#contact" className="text-youtube-dark hover:text-youtube-red transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-youtube-red to-red-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-roboto font-bold mb-6 animate-fade-in">
            Увеличьте аудиторию<br />
            <span className="text-youtube-light">YouTube канала</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-youtube-light opacity-90 animate-fade-in">
            Безопасная и постепенная накрутка просмотров, лайков и подписчиков
          </p>
          <div className="flex items-center justify-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={24} />
              <span>Безопасно</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={24} />
              <span>Постепенно</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={24} />
              <span>24/7</span>
            </div>
          </div>
          <Button 
            size="lg" 
            className="bg-white text-youtube-red hover:bg-youtube-light font-semibold px-8 py-4 text-lg animate-pulse-glow"
            onClick={() => document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Заказать продвижение
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-youtube-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12 text-youtube-dark">
            Наши услуги
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Eye" size={48} className="mx-auto text-youtube-red mb-4" />
                <CardTitle className="text-youtube-dark">Просмотры</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Увеличение просмотров с живой аудиторией</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Heart" size={48} className="mx-auto text-youtube-red mb-4" />
                <CardTitle className="text-youtube-dark">Лайки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Органичное увеличение лайков на видео</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="MessageCircle" size={48} className="mx-auto text-youtube-red mb-4" />
                <CardTitle className="text-youtube-dark">Комментарии</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Качественные комментарии от реальных пользователей</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader>
                <Icon name="Users" size={48} className="mx-auto text-youtube-red mb-4" />
                <CardTitle className="text-youtube-dark">Подписчики</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Привлечение активных подписчиков</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section id="order" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12 text-youtube-dark">
            Оформить заказ
          </h2>
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-center text-youtube-dark">
                Введите ссылку на видео
              </CardTitle>
              <CardDescription className="text-center">
                Мы начнем продвижение в течение 2-6 часов
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleOrderSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="video-url" className="text-youtube-dark">Ссылка на YouTube видео</Label>
                  <Input
                    id="video-url"
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label className="text-youtube-dark mb-4 block">Выберите тариф</Label>
                  <div className="grid gap-4">
                    {plans.map((plan) => (
                      <div 
                        key={plan.id}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedPlan === plan.id 
                            ? 'border-youtube-red bg-red-50' 
                            : 'border-gray-200 hover:border-youtube-red'
                        }`}
                        onClick={() => setSelectedPlan(plan.id)}
                      >
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            name="plan"
                            value={plan.id}
                            checked={selectedPlan === plan.id}
                            onChange={() => setSelectedPlan(plan.id)}
                            className="text-youtube-red"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2">
                              <span className="font-semibold text-youtube-dark">{plan.name}</span>
                              {plan.popular && (
                                <Badge className="bg-youtube-red text-white">Популярный</Badge>
                              )}
                            </div>
                            <span className="text-2xl font-bold text-youtube-red">{plan.price}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-youtube-red hover:bg-red-600 text-white font-semibold py-3"
                  size="lg"
                >
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Оформить заказ
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 bg-youtube-light">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12 text-youtube-dark">
            Тарифные планы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={plan.id} 
                className={`relative hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-youtube-red scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-youtube-red text-white px-4 py-1">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-roboto text-youtube-dark">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-youtube-red mt-4">{plan.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full mt-6 bg-youtube-red hover:bg-red-600 text-white"
                    onClick={() => {
                      setSelectedPlan(plan.id);
                      document.getElementById('order')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-4xl font-roboto font-bold text-center mb-12 text-youtube-dark">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                <AccordionTrigger className="text-left text-youtube-dark hover:text-youtube-red">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-youtube-dark text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Youtube" size={32} className="text-youtube-red" />
                <h3 className="text-xl font-roboto font-bold">YouTube Growth</h3>
              </div>
              <p className="text-gray-300">
                Профессиональное продвижение YouTube каналов с гарантией качества
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>support@youtubegrowth.ru</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>+7 (800) 123-45-67</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Соцсети</h4>
              <div className="flex space-x-4">
                <Icon name="MessageCircle" size={24} className="text-gray-300 hover:text-youtube-red cursor-pointer transition-colors" />
                <Icon name="Mail" size={24} className="text-gray-300 hover:text-youtube-red cursor-pointer transition-colors" />
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; 2024 YouTube Growth Service. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;