export const ENTITY = {
  PERSONAL: 'Personal',
  PUESTO: 'Puesto',
  EMPRESA: 'Empresa',
};

export const ACTIONS = {
  CREATED: 'creado correctamente',
  UPDATED: 'actualizado correctamente',
  DELETED: 'eliminado correctamente',
};

export const VALIDATIONS = {
  SUCCESS: {
    CREATED: 'Creado correctamente',
    UPDATED: 'Actualizado correctamente',
    DELETED: 'Eliminado correctamente',
  },
  ERRORS: {
    NOT_FOUND: 'No encontrado',
    ALREADY_EXISTS: 'Ya existe',
    UNAUTHORIZED: 'No autorizado',
    MISSING_FIELDS: 'Faltan datos obligatorios',
    INCORRECT_PASSWORD: 'Contraseña incorrecta',
    SERVER_ERROR: 'Error en el servidor',
    ACTION_NOT_ALLOWED: 'Acción no permitida',
    SESSION_EXPIRED: 'Sesión expirada',
    INVALID_FORMAT: 'Formato de datos inválido',
    UNAVAILABLE: 'Recurso no disponible',
    ACCESS_DENIED: 'Acceso denegado',
    VALIDATION_FAILED: 'Error de validación',
  },
};

export const FIELDS = {
  ID: 'id',
  EMAIL: 'email',
  RUC: 'RUC',
  DNI: 'DNI',
  APELLIDOS: 'Apellidos',
  CODIGO: 'codigo',
  PASSWORD: 'password',
  REPEAT_PASSWORD: 'repeatPassword',
  NAME: 'nombre',
  LAST_NAME: 'apellido',
  PHONE: 'telefono',
  ADDRESS: 'direccion',
  USERNAME: 'username',
  STATUS: 'estado',
  ROLE: 'rol',
};
