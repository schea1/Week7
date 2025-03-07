import math

class Square:
    def __init__(self, side):
        self.side = side

    def perimeter(self):
        return 4 * self.side

    def area(self):
        return self.side ** 2

    def diagonal(self):
        return math.sqrt(2) * self.side

    def describe(self):
        perim_val = self.perimeter()
        area_val = self.area()
        diag_val = self.diagonal()

        # Format perimeter
        perim_float = float(perim_val)
        perim_str = str(int(perim_float)) if perim_float.is_integer() else f"{perim_float}"
        
        # Format area
        area_float = float(area_val)
        area_str = str(int(area_float)) if area_float.is_integer() else f"{area_float}"
        
        # Format diagonal to three decimal places
        diag_str = f"{diag_val:.3f}"
        
        return f"Square with side {self.side} has perimeter of {perim_str}, area of {area_str}, and diagonal of {diag_str}"

# Create three squares
square1 = Square(2)
square2 = Square(3)
square3 = Square(1.5)

# Display their descriptions
print(square1.describe())
print(square2.describe())
print(square3.describe())