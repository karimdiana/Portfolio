#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Function to find slang definition
void find_slang(const char *term) {
    FILE *file = fopen("slang.txt", "r");
    if (file == NULL) {
        printf("Could not open slang.txt\n");
        return;
    }

    char line[256];
    int found = 0;

    while (fgets(line, sizeof(line), file)) {
        char *slang = strtok(line, ":");
        char *definition = strtok(NULL, "\n");

        if (slang != NULL && strcmp(slang, term) == 0) {
            printf("Slang: %s\nDefinition: %s\n", slang, definition);
            found = 1;
            break;
        }
    }

    if (!found) {
        printf("Slang term not found.\n");
    }

    fclose(file);
}

int main() {
    char term[50];

    printf("Enter a Kazakh slang term: ");
    fgets(term, sizeof(term), stdin);
    term[strcspn(term, "\n")] = 0; // Remove newline character

    find_slang(term);

    return 0;
}
