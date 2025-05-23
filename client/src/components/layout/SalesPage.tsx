import { motion } from "framer-motion";
import React from "react";
import { RecipeGrid } from "@/components/recipe/RecipeGrid";
import { RecipeCollage } from "@/components/recipe/RecipeCollage";
import { LINKS, COLORS, TEXTS } from "@/config";
import { RecipeImages } from '@/assets/imageExports';

// Componente de botão pulsante verde
const GreenPulseButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <div className="relative inline-block w-full md:w-auto mb-4">
      <div className="absolute inset-0 rounded-full bg-[#4CAF50] opacity-30" 
        style={{
          animation: "ping 3s cubic-bezier(0.66, 0, 0, 1) infinite"
        }}
      ></div>
      <a 
        href={href}
        target="_blank" 
        rel="noopener noreferrer"
        className="relative inline-block w-full md:w-auto py-4 px-10 text-lg font-bold rounded-full text-white"
        style={{ 
          background: COLORS.SUCCESS,
          boxShadow: `0 4px 10px rgba(76, 175, 80, 0.3)`
        }}
      >
        {children}
      </a>
    </div>
  );
};

// Componente para exibir a seção de preço e botão de compra
const PriceSection = ({ buyUrl }: { buyUrl: string }) => (
  <div className="py-6 px-6 text-center mb-8 bg-[#FDF8F5] rounded-lg">
    <p className="mb-1">Valeur réelle du pack : <span className="line-through">{TEXTS.SALES.PRICE.ORIGINAL}</span></p>
    <p className="text-2xl font-bold text-[#A85544] mb-4">Aujourd'hui : seulement {TEXTS.SALES.PRICE.CURRENT}</p>
    <p className="font-bold text-[#F44336] mb-6">⚠️ {TEXTS.SALES.PRICE.REMAINING}</p>
    
    <GreenPulseButton href={buyUrl}>
      {TEXTS.SALES.BUY_BUTTON}
    </GreenPulseButton>
    
    <p className="text-sm">📩 {TEXTS.SALES.DELIVERY}</p>
  </div>
);

export default function SalesPage() {
  // Usando a URL do botão de compra do arquivo centralizado de configurações
  const buyUrl = LINKS.SALES.BUY_URL;
  
  // Container com borda colorida
  const ColorBorderCard = ({ 
    bgColor = "#F5F9FF", 
    borderColor = "#2196F3", 
    children 
  }: { 
    bgColor?: string, 
    borderColor?: string, 
    children: React.ReactNode 
  }) => (
    <div className={`mb-8 p-6 rounded-md border-l-4`} 
         style={{ backgroundColor: bgColor, borderColor: borderColor }}>
      {children}
    </div>
  );

  // Componente para exibir uma imagem de receita com moldura
  const RecipeImageFrame = ({ 
    src, 
    alt 
  }: { 
    src: string, 
    alt: string 
  }) => (
    <div className="mb-8 flex justify-center">
      <div className="max-w-[700px] w-full mx-auto p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
        <img 
          src={src} 
          alt={alt}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[700px] mx-auto px-4 py-8 text-[#333]">
        {/* Cabeçalho da página */}
        <div className="bg-[#FDF8F5] p-6 rounded-md mb-8">
          <h1 className="text-2xl md:text-3xl font-normal text-[#A85544] mb-3">
            500 recettes sans sucre, sans gluten et sans lactose
            <br />
            <span className="block mt-3">qui nourrissent, font mincir avec plaisir</span>
            <span className="block mt-3">et rééquilibrent votre corps.</span>
          </h1>

          <div className="mt-6">
            <p className="mb-4">Pas de régime à la mode. Pas d'ingrédients impossibles à trouver. Pas de plats tristes.</p>
            <p className="mb-4">Seulement une cuisine <strong>vraie, savoureuse et libératrice</strong> — pour les femmes avec des restrictions qui veulent encore <strong>se régaler sans peur.</strong></p>
          </div>
        </div>

        {/* Grade de imagens de receitas - grid 2x4 exatamente como na referência */}
        <div className="mb-8">
          <div className="grid grid-cols-2 gap-2">
            <div className="p-1 bg-white rounded-lg shadow-sm">
              <img src={RecipeImages.recipes} alt="Recette saine" className="rounded-md w-full h-auto" />
            </div>
            <div className="p-1 bg-white rounded-lg shadow-sm">
              <img src={RecipeImages.recipes} alt="Recette saine" className="rounded-md w-full h-auto" />
            </div>
            <div className="p-1 bg-white rounded-lg shadow-sm">
              <img src={RecipeImages.recipes} alt="Recette saine" className="rounded-md w-full h-auto" />
            </div>
            <div className="p-1 bg-white rounded-lg shadow-sm">
              <img src={RecipeImages.recipes} alt="Recette saine" className="rounded-md w-full h-auto" />
            </div>
            <div className="p-1 bg-white rounded-lg shadow-sm">
              <img src={RecipeImages.recipes} alt="Recette saine" className="rounded-md w-full h-auto" />
            </div>
            <div className="p-1 bg-white rounded-lg shadow-sm">
              <img src={RecipeImages.recipes} alt="Recette saine" className="rounded-md w-full h-auto" />
            </div>
            <div className="p-1 bg-white rounded-lg shadow-sm">
              <img src={RecipeImages.recipes} alt="Recette saine" className="rounded-md w-full h-auto" />
            </div>
            <div className="p-1 bg-white rounded-lg shadow-sm">
              <img src={RecipeImages.recipes} alt="Recette saine" className="rounded-md w-full h-auto" />
            </div>
          </div>
        </div>

        {/* Seções para quem é e para quem não é */}
        <ColorBorderCard bgColor="#F1F9F1" borderColor="#4CAF50">
          <h3 className="text-xl font-bold text-[#4CAF50] mb-4">💚 Pour qui c'est:</h3>
          <ul className="list-none pl-1 space-y-3">
            <li>🌿 Femmes avec intolérances (gluten, lactose, sucre)</li>
            <li>🥗 Celles qui veulent mincir sans frustration</li>
            <li>😩 Celles fatiguées des plats tristes et sans goût</li>
            <li>✨ Celles qui veulent une méthode simple et durable</li>
          </ul>
        </ColorBorderCard>

        <ColorBorderCard bgColor="#FFF5F5" borderColor="#F44336">
          <h3 className="text-xl font-bold text-[#F44336] mb-4">🚫 Pour qui ce n'est pas:</h3>
          <ul className="list-none pl-1 space-y-3">
            <li>🙅‍♀️ Celles qui ne veulent pas changer leurs habitudes</li>
            <li>🧪 Celles qui cherchent une solution magique</li>
            <li>🌀 Celles qui préfèrent rester dans le désordre</li>
            <li>🍕 Celles qui refusent de cuisiner même un minimum</li>
          </ul>
        </ColorBorderCard>

        {/* Seção sobre a exclusividade das receitas */}
        <div className="bg-[#FDF1F1] p-6 rounded-lg mb-8 text-center">
          <p className="text-[#A85544] font-semibold text-xl mb-4">Vous ne trouverez pas ces recettes sur Google.</p>
          <p className="text-[#333333] text-lg">
            Elles sont nées dans la vraie cuisine d'Amélie — pas sur Pinterest, ni dans un blog copié-collé. Chaque plat a été pensé pour <span className="font-semibold">apaiser, nourrir</span>... et redonner du <span className="font-semibold">plaisir</span> à celles qui avaient renoncé.
          </p>
        </div>

        {/* Imagem do livro de receitas - como na referência */}
        <div className="mb-8 flex justify-center">
          <div className="max-w-[700px] w-full mx-auto p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
            <img 
              src={RecipeImages.book} 
              alt="Livre de recettes Chef Amélie Dupont"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* O que você vai receber */}
        <ColorBorderCard bgColor="#F5F9FF" borderColor="#2196F3">
          <h2 className="text-2xl font-bold text-[#2196F3] mb-4">📦 Ce que vous allez recevoir :</h2>
          <p className="mb-4">Un accès à <span className="text-[#A85544] font-bold">500 recettes exclusives</span> créées et testées par la Cheffe Amélie — organisées pour nourrir, apaiser et régaler votre quotidien.</p>
          
          <ul className="list-none pl-1 mb-4 space-y-4">
            <li>🍽️ <span className="text-[#A85544] font-bold">100 petits-déjeuners & collations</span> — pour bien démarrer la journée, sans pic de sucre</li>
            <li>🥦 <span className="text-[#A85544] font-bold">300 déjeuners & dîners</span> — faciles, nourrissants et équilibrés, pour tous les jours</li>
            <li>🍫 <span className="text-[#A85544] font-bold">100 desserts gourmands</span> — sans sucre raffiné, mais pleins de plaisir</li>
            <li>🧭 <span className="text-[#A85544] font-bold">Recettes classées par objectif</span> : digestion, satiété, inflammation, énergie</li>
          </ul>
        </ColorBorderCard>

        {/* Imagem da chef com o livro - seguindo a referência */}
        <div className="mb-8 flex justify-center">
          <div className="max-w-[700px] w-full mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <img 
              src={RecipeImages.main} 
              alt="Chef Amélie avec son livre de recettes"
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Bônus exclusivos */}
        <ColorBorderCard bgColor="#FFF8F0" borderColor="#FF9800">
          <h2 className="text-2xl font-bold text-[#FF9800] mb-4">🎁 Bonus exclusifs inclus aujourd'hui :</h2>
          
          <div className="space-y-5">
            {TEXTS.SALES.BONUSES.map((bonus, index) => (
              <div key={index}>
                <p className="font-bold">{bonus.title}</p>
                <p className="ml-8">{bonus.description}</p>
              </div>
            ))}
          </div>
        </ColorBorderCard>

        {/* Fotografia da pessoa mostrando o livro no celular - seguindo a referência */}
        <div className="mb-8 flex justify-center">
          <div className="max-w-[700px] w-full mx-auto p-3 bg-white rounded-xl border border-gray-200 shadow-sm">
            <img 
              src={RecipeImages.grid} 
              alt="Cliente satisfaite montrant le livre sur son téléphone"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        {/* Seção de preço e compra */}
        <PriceSection buyUrl={buyUrl} />

        {/* Mensagens de WhatsApp simuladas com fotos de receitas */}
        <div className="mb-8 px-4">
          <div className="max-w-[80%] bg-[#e2f7cb] p-4 rounded-lg mb-4 ml-auto">
            <p className="text-sm mb-2">C'est tellement bon tout ce que j'ai essayé. Le pain sans gluten est incroyable... mes enfants adorent et mon mari ne voit même pas la différence! 😍</p>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={RecipeImages.recipes} 
                alt="Pain sans gluten fait maison" 
                className="w-full h-auto" 
              />
            </div>
            <p className="text-xs text-right mt-1 text-gray-500">10:45</p>
          </div>
          
          <div className="max-w-[80%] bg-[#e2f7cb] p-4 rounded-lg mb-4 ml-auto">
            <p className="text-sm mb-2">Amélie - j'ai perdu 3kg cette semaine grâce aux recettes légères que tu m'as envoyé, je me sens tellement mieux et plus d'énergie! Le brownie sans sucre est DÉLICIEUX 😋</p>
            <div className="rounded-lg overflow-hidden">
              <img 
                src={RecipeImages.collage} 
                alt="Brownie sans sucre" 
                className="w-full h-auto" 
              />
            </div>
            <p className="text-xs text-right mt-1 text-gray-500">14:22</p>
          </div>
        </div>

        {/* Seção final de preço e compra */}
        <PriceSection buyUrl={buyUrl} />

        {/* Assinatura da Chef */}
        <div className="text-center mb-4">
          <p className="mb-4">Avec tout mon cœur — pour que vous puissiez enfin manger avec liberté et plaisir.</p>
          <p className="font-medium italic">Cheffe Amélie Dupont</p>
        </div>
      </div>
    </div>
  );
}
