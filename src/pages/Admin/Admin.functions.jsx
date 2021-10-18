export const sectionsToNr = section => {
   switch (section) {
      case 'motherboards':
         return 1;
      case 'pc':
         return 2;
      case 'gpu':
         return 3;
      case 'cpu':
         return 4;
      case 'monitors':
         return 5;
      default:
         return 1;
   }
};
