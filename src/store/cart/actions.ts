import { IProduct } from "@/types/types";
import {
  __addCart,
  __clearCart,
  __decreaseQuantity,
  __increaseQuantity,
  __removeCart,
} from ".";
import { store } from "../store";
import toast from "react-hot-toast";

export const addCart = (data: IProduct) => {
  store.dispatch(__addCart(data));
  toast.success("Ürün sepete eklendi!");
};

export const clearCart = () => {
  store.dispatch(__clearCart());
  toast("Sepet temizlendi", { icon: "🧹" });
};

export const removeCart = (id: string) => {
  store.dispatch(__removeCart(id));
  toast.success("Ürün sepetten kaldırıldı.");
};

export const increaseQuantity = (id: string) => {
  store.dispatch(__increaseQuantity(id));
  toast.success("Ürün adedi artırıldı.");
};

export const decreaseQuantity = (id: string) => {
  store.dispatch(__decreaseQuantity(id));
  toast.success("Ürün adedi azaltıldı.");
};

// fetch("https://submit.jotform.com/submit/251073677545968", {

//     "referrer": "https://form.jotform.com/",
//     "referrerPolicy": "strict-origin-when-cross-origin",
//     "body": "formID=251073677545968&jsExecutionTracker=build-date-1745137224455%3D%3Einit-started%3A1745140478215%3D%3Evalidator-called%3A1745140478274%3D%3Evalidator-mounted-false%3A1745140478274%3D%3Einit-complete%3A1745140478282%3D%3Einterval-complete%3A1745140499285%3D%3Eonsubmit-fired%3A1745148871533%3D%3Eonsubmit-fired%3A1745149023586%3D%3Esubmit-validation-passed%3A1745149023595&submitSource=form&buildDate=1745137224455&uploadServerUrl=https%3A%2F%2Fupload.jotform.com%2Fupload&eventObserverPayment=control_payment&productSearch-input=&simple_fpc=21&payment_transaction_uuid=0196527a658d7e97ade129841f5f060d1ad0&payment_version=4&payment_total_checksum=364&payment_discount_value=0&q21_forWholesale%5Bspecial_1096%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1111%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1004%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1037%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1005%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1006%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1063%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1062%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1061%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1060%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1043%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1072%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1075%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1116%5D%5Bitem_0%5D=1&q21_forWholesale%5Bspecial_1113%5D%5Bitem_0%5D=1&q21_forWholesale%5Bspecial_1007%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1105%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1008%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1009%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1010%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1047%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1011%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1106%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1107%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1102%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1073%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1012%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1104%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1013%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1099%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1100%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1014%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1050%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1045%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1044%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1046%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1042%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1041%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1083%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1065%5D%5Bitem_0%5D=0&q21_forWholesale%5B%5D%5Bid%5D=1066&q21_forWholesale%5Bspecial_1066%5D%5Bitem_0%5D=14&q21_forWholesale%5Bspecial_1067%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1089%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1086%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1088%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1087%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1082%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1074%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1110%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1095%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1109%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1108%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1015%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1016%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1040%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1017%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1068%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1018%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1056%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1055%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1054%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1094%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1081%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1069%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1020%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1093%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1021%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1092%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1019%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1091%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1038%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1039%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1084%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1115%5D%5Bitem_0%5D=1&q21_forWholesale%5Bspecial_1114%5D%5Bitem_0%5D=1&q21_forWholesale%5Bspecial_1023%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1024%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1098%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1097%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1025%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1026%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1027%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1028%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1029%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1071%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1078%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1085%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1079%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1030%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1070%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1076%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1077%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1090%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1080%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1053%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1112%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1052%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1103%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1051%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1049%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1048%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1031%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1033%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1032%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1034%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1035%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1117%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1036%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1101%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1057%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1058%5D%5Bitem_0%5D=0&q21_forWholesale%5Bspecial_1059%5D%5Bitem_0%5D=0&q34_fullName=g%C3%B6ktu%C4%9F&q36_typeA36=dwdqwewqeqw&website=&simple_spc=251073677545968-251073677545968&event_id=1745140478216_251073677545968_bwrsowv&timeToSubmit=20&validatedNewRequiredFieldIDs=%7B%22new%22%3A1%2C%22id_34%22%3A%22g%C3%B6%22%2C%22id_36%22%3A%22dw%22%7D&surchargeData=%7B%7D&selectedProductsList=%5B%7B%221066%22%3A%7B%220%22%3A%7B%22customOptionValues%22%3A%7B%220%22%3A%2214%22%7D%2C%22quantity%22%3A%2214%22%7D%7D%7D%5D&paymentFieldsToSelectedProducts=%5B%7B%221066%22%3A%7B%220%22%3A%7B%22customOptionValues%22%3A%7B%220%22%3A%2214%22%7D%2C%22quantity%22%3A14%7D%7D%7D%5D&paymentSummary=%7B%22shipping%22%3A%220.00%22%2C%22shipping_discounted%22%3A%220.00%22%2C%22subtotal_discounted%22%3A%22364.00%22%2C%22tax%22%3A%220.00%22%2C%22tax_discounted%22%3A%220.00%22%2C%22subtotal%22%3A%22364.00%22%2C%22total%22%3A%22364.00%22%2C%22discount%22%3A%220.00%22%7D",
//     "method": "POST",
//     "mode": "cors",
//     "credentials": "include"
//   });
