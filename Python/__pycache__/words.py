def print_upper_words(words):
    """print out each word on a separate line and upper case
    """


    for word in words:
        print(word.upper())
print_upper_words(["hello", "hey", "goodbye", "yo", "yes"])

def print_upper_words2(words):
    """only prints words that start with the letter ‘e’ (either upper or lowercase), uppercased"""
    for word in words:
        if word.startswith('e') or word.startswith('E'):
            print(word.upper())

print_upper_words2(['Eyes','hello','elephant'])



def print_upper_words3(words, must_start_with):
    """Print each word on sep line, uppercased, if starts with one of given

        >>> print_upper_words3(["eagle", "Edward", "Alfred", "zope"],
        ...                   must_start_with=["A", "E"])
        EDWARD
        ALFRED
    """

    for word in words:
        for letter in must_start_with:
            if word.startswith(letter):
                print(word.upper())
                break
print_upper_words3(["eagle", "Edward", "Alfred", "zope"],must_start_with=["A", "E"])