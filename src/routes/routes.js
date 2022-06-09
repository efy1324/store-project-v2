export const ROUTES = {
  TRAILING_PATH           : "/*",
  ROOT                    : "/",
  STORE                   : "/store",
  ORDER_FORM              : "/order_form",
  ADMIN_SITE              : "/admin_site",
  STORE_GRAPHES           : "/store_graphes",
  CLIENT_ORDERS           : "/client_orders",
  CREATE_PRODUCT          : "/create_product",
  EDIT_PRODUCT            : "/edit_product/:id"
}


export const ROUTES_LINKS = {
  TO_STORE                :  ROUTES.STORE,
  TO_ORDER_FORM           :  ROUTES.STORE + ROUTES.ORDER_FORM,
  TO_ADMIN_SITE           :  ROUTES.STORE + ROUTES.ADMIN_SITE,
  TO_STORE_GRAPHES        :  ROUTES.STORE + ROUTES.ADMIN_SITE + ROUTES.STORE_GRAPHES,
  TO_CLIENT_ORDERS        :  ROUTES.STORE + ROUTES.ADMIN_SITE + ROUTES.CLIENT_ORDERS,
  TO_CREATE_PRODUCT       :  ROUTES.STORE + ROUTES.ADMIN_SITE + ROUTES.CREATE_PRODUCT,
  TO_EDIT_PRODUCT         :  ROUTES.STORE + ROUTES.ADMIN_SITE + ROUTES.EDIT_PRODUCT,
}