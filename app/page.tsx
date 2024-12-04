import {Container, Title, TopBar, Filters, ProductsGroupList} from "@/components/shared";

export default function Home() {
  return (
   <>
     <Container className="mt-10">
       <Title text="Все пиццы" size="lg" className="font-extrabold" />
     </Container>
     <TopBar />
     <Container className='mt-10 pb-14'>
       <div className='flex gap-[80px]'>
         <div className='w-[250px]'>
           <Filters />
         </div>
         <div className='flex-1'>
           <div className='flex flex-col gap-16'>
             <ProductsGroupList title='Пиццы' products={[{
               id: 1,
               name: 'Бургер-пицца',
               imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
               price: 550,
               items: [{price: 500}],
             }]} categoryId={1} />
             <ProductsGroupList title='Комбо' products={[{
               id: 1,
               name: 'Бургер-пицца',
               imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
               price: 550,
               items: [{price: 500}],
             }]} categoryId={1} />
             <ProductsGroupList title='Закуски' products={[{
               id: 1,
               name: 'Бургер-пицца',
               imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D61698827EE9B8DB6D0AEC53410.avif',
               price: 550,
               items: [{price: 500}],
             }]} categoryId={1} />
           </div>
         </div>
       </div>
     </Container>
   </>
  );
}
