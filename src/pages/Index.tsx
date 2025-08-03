import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const beerTypes = [
    {
      id: 1,
      name: "Темный лагер",
      description: "Насыщенный темный лагер с нотами карамели и шоколада",
      price: "250₽/л",
      alcohol: "5.2%",
      image: "/img/7054811b-5d4a-403c-a29e-3369852f91a1.jpg",
      category: "Лагер"
    },
    {
      id: 2,
      name: "Пшеничное светлое",
      description: "Освежающее пшеничное пиво с цитрусовыми нотами",
      price: "220₽/л",
      alcohol: "4.8%",
      image: "/img/7e1e91b4-4562-4bb2-9019-bd58463d2a2a.jpg",
      category: "Пшеничное"
    },
    {
      id: 3,
      name: "IPA Хмельной",
      description: "Горьковатый IPA с ароматом тропических фруктов",
      price: "280₽/л",
      alcohol: "6.5%",
      image: "/img/7054811b-5d4a-403c-a29e-3369852f91a1.jpg",
      category: "IPA"
    }
  ];

  const events = [
    {
      date: "10 августа",
      time: "19:00",
      title: "Дегустация крафтового пива",
      description: "Попробуйте новые сорта от местных пивоваров"
    },
    {
      date: "15 августа", 
      time: "18:30",
      title: "Пивная викторина",
      description: "Проверьте свои знания о пиве и выиграйте призы"
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-wood text-cream py-4 shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name="Beer" size={32} className="text-amber" />
              <h1 className="text-2xl font-heading font-bold">пенки|гренки</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#catalog" className="hover:text-amber transition-colors">Каталог</a>
              <a href="#events" className="hover:text-amber transition-colors">Мероприятия</a>
              <a href="#offers" className="hover:text-amber transition-colors">Акции</a>
              <a href="#about" className="hover:text-amber transition-colors">О нас</a>
            </nav>
            <Button variant="outline" className="border-amber text-amber hover:bg-amber hover:text-wood">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-wood to-wood-dark text-cream py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-5xl font-heading font-bold mb-6 animate-fade-in">
              Крафтовое пиво на разлив
            </h2>
            <p className="text-xl mb-8 animate-fade-in">
              Лучшие сорта от местных пивоваров. Свежесть, качество и непревзойденный вкус в каждом глотке.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber hover:bg-amber-600 text-wood font-semibold px-8 py-3">
                <Icon name="ArrowRight" size={20} className="ml-2" />
                Посмотреть каталог
              </Button>
              <Button variant="outline" size="lg" className="border-cream text-cream hover:bg-cream hover:text-wood px-8 py-3">
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на дегустацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Beer Catalog */}
      <section id="catalog" className="py-16 bg-cream-dark">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center text-wood mb-12">
            Наши сорта пива
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beerTypes.map((beer) => (
              <Card key={beer.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={beer.image} 
                    alt={beer.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-wood font-heading">{beer.name}</CardTitle>
                      <Badge variant="secondary" className="mt-2 bg-amber text-wood">
                        {beer.category}
                      </Badge>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-amber">{beer.price}</p>
                      <p className="text-sm text-forest">{beer.alcohol}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-forest mb-4">
                    {beer.description}
                  </CardDescription>
                  <div className="flex gap-2">
                    <Button className="flex-1 bg-amber hover:bg-amber-600 text-wood">
                      <Icon name="Plus" size={16} className="mr-2" />
                      В корзину
                    </Button>
                    <Button variant="outline" size="icon" className="border-amber text-amber hover:bg-amber hover:text-wood">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="py-16 bg-forest text-cream">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center mb-12">
            Мероприятия и дегустации
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {events.map((event, index) => (
              <Card key={index} className="bg-forest-light border-amber">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-amber text-wood rounded-lg p-3 min-w-fit">
                      <Icon name="Calendar" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-cream font-heading">{event.title}</CardTitle>
                      <p className="text-amber font-semibold">{event.date} в {event.time}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-cream/80 mb-4">
                    {event.description}
                  </CardDescription>
                  <Button variant="outline" className="border-amber text-amber hover:bg-amber hover:text-wood">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section id="offers" className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-heading font-bold text-center text-wood mb-12">
            Акции и скидки
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-r from-amber to-amber-600 text-wood border-0">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center">
                  <Icon name="Percent" size={28} className="mr-3" />
                  Счастливые часы
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  Скидка 20% на все сорта пива с 15:00 до 18:00 в будние дни
                </p>
                <Button variant="outline" className="border-wood text-wood hover:bg-wood hover:text-amber">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            
            <Card className="bg-wood text-cream border-0">
              <CardHeader>
                <CardTitle className="font-heading text-2xl flex items-center">
                  <Icon name="Users" size={28} className="mr-3 text-amber" />
                  Компания друзей
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">
                  При покупке от 3 литров пива - четвертый литр в подарок!
                </p>
                <Button variant="outline" className="border-amber text-amber hover:bg-amber hover:text-wood">
                  Узнать больше
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-wood text-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-heading font-bold mb-8">
              О магазине пенки|гренки
            </h3>
            <p className="text-lg mb-8 leading-relaxed">
              Мы — команда истинных ценителей крафтового пива. В нашем магазине вы найдете 
              только лучшие сорта от проверенных местных пивоваров. Каждый день мы следим 
              за свежестью нашего пива и готовы поделиться историей каждого сорта.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Icon name="Clock" size={48} className="text-amber mx-auto mb-4" />
                <h4 className="font-heading font-semibold mb-2">Режим работы</h4>
                <p>Пн-Пт: 12:00-22:00<br />Сб-Вс: 10:00-23:00</p>
              </div>
              <div className="text-center">
                <Icon name="MapPin" size={48} className="text-amber mx-auto mb-4" />
                <h4 className="font-heading font-semibold mb-2">Адрес</h4>
                <p>ул. Пивная, 15<br />г. Москва</p>
              </div>
              <div className="text-center">
                <Icon name="Phone" size={48} className="text-amber mx-auto mb-4" />
                <h4 className="font-heading font-semibold mb-2">Телефон</h4>
                <p>+7 (495) 123-45-67<br />Звоните нам!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wood-dark text-cream py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <Icon name="Beer" size={24} className="text-amber" />
              <span className="font-heading font-bold">пенки|гренки</span>
            </div>
            <div className="flex space-x-6">
              <Icon name="Instagram" size={24} className="text-amber cursor-pointer hover:text-amber-600 transition-colors" />
              <Icon name="Facebook" size={24} className="text-amber cursor-pointer hover:text-amber-600 transition-colors" />
              <Icon name="Mail" size={24} className="text-amber cursor-pointer hover:text-amber-600 transition-colors" />
            </div>
          </div>
          <div className="border-t border-wood mt-6 pt-6 text-center">
            <p className="text-cream/70">© 2024 пенки|гренки. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;