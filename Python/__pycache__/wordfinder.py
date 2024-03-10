"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:
    """Machine for searching random words from dict"""
   

    def __init__(self,path):
        """read dictionary"""
        dict_file =open(path)
        self.words =self.parse(dict_file)
        print(f"{len(self.words)} words read")
    def parse(self,dict_file):
        """parse dict_file into list of words"""
        return [word.strip() for word in dict_file]
    def random(self):
        """return radom word"""
        return random.choice(self.words)

class SpecialWordFinder(WordFinder):
    """return one of the actual foods but not blank lines or comments"""
    def parse(self,dict_file):
        """parse dict_file to lists of words"""
        return [word.strip() for word in dict_file if word.strip() and not word.startswith("#")]