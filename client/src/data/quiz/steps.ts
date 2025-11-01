/**
 * Passos/etapas do quiz
 * Contém todas as perguntas e opções que o usuário verá durante o quiz
 */

import { QuizStepType } from "@/types/quiz";
import { RecipeImages, ChefImages } from '@/assets/imageExports';

export const quizSteps: QuizStepType[] = [
  // Step 0 - Landing Page
  {
    name: "landing",
    title: "Vous n'avez plus besoin de choisir entre le goût et votre corps.",
    textBlocks: [
      {
        content: "Brownie fondant, brioche moelleuse, tartelette aux noisettes croquantes… tout ça sans sucre, sans gluten, sans lactose et le meilleur… sans culpabilité!"
      },
      {
        content: "En 50 secondes, découvrez votre profil gourmet et accédez au carnet secret de la Cheffe Amélie, mais dépêchez-vous avant qu'il ne soit retiré du site."
      }
    ],
    image: "https://cdn.xquiz.co/images/94f2084a-557c-43be-abcc-2ba23141cb46",
    imageAlt: "Desserts sans sucre, sans gluten, sans lactose",
    buttonText: "Découvrir les recettes que les nutritionnistes gardent pour elles",
    footerText: "Plus de <strong>30 000 femmes</strong> ont déjà découvert le leur<br>Ce test ne prend que 60 secondes"
  },
  
  // Step 1
  {
    name: "discourage",
    title: "<span class='text-[#333333]'>Quand vous essayez de </span><span class='text-primary font-semibold'>manger plus sainement</span><span class='text-[#333333]'>... qu'est-ce qui vous </span><span class='text-primary font-semibold'>décourage</span><span class='text-[#333333]'> le plus ?</span>",
    options: [
      {
        value: "fades",
        label: "Les plats sont souvent fades ou secs"
      },
      {
        value: "faim",
        label: "J'ai encore faim après avoir mangé"
      },
      {
        value: "idees",
        label: "Je ne sais pas quoi cuisiner au quotidien"
      },
      {
        value: "abandon",
        label: "J'abandonne au bout de quelques jours"
      }
    ]
  },
  
  // Step 2
  {
    name: "dessert",
    title: "<span class='text-primary font-semibold'>Même sans sucre, sans gluten, sans lactose... </span><span class='text-[#333333]'>quelle de ces gourmandises vous donne le plus envie ?</span>",
    image: RecipeImages.grid,
    imageAlt: "Collection de desserts sans sucre, sans gluten, sans lactose",
    options: [
      {
        value: "brownie",
        label: "🍫 Brownie fondant encore tiède"
      },
      {
        value: "brioche",
        label: "🥐 Brioche moelleuse à la cannelle"
      },
      {
        value: "tartelette",
        label: "🥧 Tartelette chocolat-noisette"
      },
      {
        value: "baguette",
        label: "🥖 Baguette croustillante et chaude"
      }
    ]
  },
  
  // Step 3
  {
    name: "tried_recipes",
    title: "<span class='text-[#333333]'>Vous avez déjà essayé de suivre des </span><span class='text-primary font-semibold'>recettes \"saines\" </span><span class='text-[#333333]'>trouvées sur internet ?</span><br><span class='text-[#333333]'>Celles qui promettent tout... mais qui finissent </span><span class='text-primary font-semibold'>trop compliquées, trop fades </span><span class='text-[#333333]'>ou </span><span class='text-primary font-semibold'>complètement ratées </span><span class='text-[#333333]'>?</span>",
    options: [
      {
        value: "disappointed",
        label: "😔 Oui, j'ai essayé... et j'ai été déçue"
      },
      {
        value: "sometimes",
        label: "😐 J'ai essayé, parfois ça marche"
      },
      {
        value: "no_trust",
        label: "🧐 Non, je ne fais pas confiance aux recettes du net"
      }
    ]
  },
  
  // Step 4
  {
    name: "chef_profile",
    image: ChefImages.amelie,
    imageAlt: "Chef Amélie Dupont",
    title: "Une rencontre intime avec la Cheffe Amélie Dupont.",
    description: "La femme derrière les recettes qui ont déjà transformé des milliers de vies.",
    textBlocks: [
      {
        content: "Amélie est née à Aix-en-Provence, où les journées commençaient avec l'odeur du pain fait maison, des herbes fraîches et les histoires culinaires que sa mère lui apprenait dans la cuisine."
      },
      {
        content: "Elle a grandi parmi des saveurs intenses, mais c'est une douleur silencieuse qui a tout changé…"
      },
      {
        content: "Après des années à souffrir de ballonnements, de fatigue chronique et de troubles digestifs, elle a découvert que ce qui la rendait malade chaque jour… se trouvait dans son propre assiette: le gluten, le lactose et le sucre."
      },
      {
        content: "C'est à ce moment-là qu'elle a décidé de réinventer sa cuisine… et sa vie.",
        highlight: true
      },
      {
        content: "Aujourd'hui, diplômée en cuisine naturelle et spécialisée dans l'alimentation anti-inflammatoire, elle réunit plus de 500 recettes fonctionnelles qui nourrissent, apaisent le corps et redonnent le plaisir de manger en toute légèreté. Des recettes pensées pour des femmes réelles, avec des corps réels, qui veulent simplement vivre mieux."
      }
    ],
    buttonText: "Voir comment ses recettes peuvent m'aider"
  },
  
  // Step 5
  {
    name: "improve",
    title: "<span class='text-primary font-semibold'>Qu'est-ce que vous aimeriez améliorer </span><span class='text-[#333333]'>en priorité aujourd'hui ?</span>",
    options: [
      {
        value: "digestion",
        label: "🥗 Réduire les ballonnements et améliorer ma digestion"
      },
      {
        value: "sugar",
        label: "🍬 Stabiliser ma glycémie et réduire les envies de sucre"
      },
      {
        value: "weight",
        label: "⚖️ Perdre du poids sans frustration ni régime extrême"
      },
      {
        value: "energy",
        label: "💪 Retrouver mon énergie et sortir de la fatigue chronique"
      },
      {
        value: "all",
        label: "🌱 Tout ça à la fois (et enfin me sentir bien dans mon corps)"
      }
    ]
  },
  
  // Step 6
  {
    name: "testimonials",
    title: "<span class='text-primary font-semibold'>Centaines de femmes </span><span class='text-[#333333]'>ont déjà testé ces recettes et vu leur corps se transformer.</span>",
    description: "<span class='text-primary'>Faites glisser ➤ pour voir ce qu'elles disent.</span>",
    isTestimonialStep: true,
    buttonText: "🔍 DÉCOUVRIR MON PROFIL"
  }
];