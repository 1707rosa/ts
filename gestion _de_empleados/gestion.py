class Empleado:
    def __init__(self, nombre, apellido, salario, cargo): #define un metodo constructor de la clase, con parametros
        self.nombre = nombre
        self.apellido = apellido
        self.salario = salario
        self.cargo = cargo
 
    def mostrar_informacion(self):
        print(f"Nombre: {self.nombre}") #imprime el nombre  del objeto
        print(f"Apellido: {self.apellido}") #imprimir el apellido  "" ""
        print(f"Salario: {self.salario}") #imprimir el salario "" ""
        print(f"Cargo: {self.cargo}") #imprimir el cargo "" ""
 
 
class Empresa:
    def __init__(self): #metodo constructor de la clase 
        self.lista_empleados = [] #inicializa un atributo y se asigna al objeto self
 
    def agregar_empleado(self, empleado): #metodo para agregar el empleado 
        self.lista_empleados.append(empleado)
        print("Empleado agregado correctamente.")
 
    def listar_empleados(self): #metodo para listar los empleados
        if not self.lista_empleados: #verificar si la lista de empleados esta vacia
            print("No hay empleados registrados.")
        else:
            print("Lista de empleados:")
            for empleado in self.lista_empleados: #la informacion de cada empleado
                empleado.mostrar_informacion()
                print()
 
    def calcular_total_salarios(self): #metodo para calcular el salario de los empleados
        total_salarios = sum(empleado.salario for empleado in self.lista_empleados) 
        print(f"Total de salarios pagados por la empresa: {total_salarios}")
 
 
#  solicita información de un empleado al usuario
def solicitar_datos_empleado():
    nombre = input("Ingrese el nombre del empleado: ")
    apellido = input("Ingrese el apellido del empleado: ")
    salario = float(input("Ingrese el salario del empleado: "))
    cargo = input("Ingrese el cargo del empleado: ")
    return nombre, apellido, salario, cargo
 
 
# mostrar el menú y procesar la opción del usuario
def mostrar_menu():
    print("1. Agregar Empleado")
    print("2. Listar Empleados")
    print("3. Calcular Total de Salarios")
    print("4. Salir")
    opcion = input("Seleccione una opción: ")
    return opcion
 
 

if __name__ == "__main__": #funcionamiento del interprete de python
    empresa = Empresa() #instancia de la clase empresa
 # 'switch' de las opciones y acciones que se realizan en el menu
    while True:
        opcion = mostrar_menu()
        if opcion == "1":
            nombre, apellido, salario, cargo = solicitar_datos_empleado()
            empleado = Empleado(nombre, apellido, salario, cargo)
            empresa.agregar_empleado(empleado)
        elif opcion == "2":
            empresa.listar_empleados()
        elif opcion == "3":
            empresa.calcular_total_salarios()
        elif opcion == "4":
            print("¡Hasta luego!")
            break
        else:
            print("Opción no válida. Por favor, seleccione una opción válida.")
