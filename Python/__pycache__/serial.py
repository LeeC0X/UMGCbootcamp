"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """
    def __init__(self,start =0):
        """making a new generator, starting at start"""
        self.start = self.next =start
    def __repr__(self):
        """initial show representation"""
        return f"serial generator start={self.start} next ={self.next}"
    def generate(self):
        """return the next serial"""
        self.next +=1
        return self.next-1
     