export const t1 = {
  id: 1,
  userId: 1,
  question:
    "I have a TV that suddenly stopped turning on. No signs of life. Any suggestions on how to diagnose and fix this issue?",
  replies: [
    {
      userId: 2,
      content:
        "Check the power cable and outlet first. Sometimes it's a simple power issue.",
    },
    {
      userId: 3,
      content:
        "Look for any blown fuses on the TV's circuit board. A blown fuse could be the culprit.",
    },
    {
      userId: 7,
      content:
        "Inspect the capacitors on the power supply board. Bulging or leaking capacitors are a common cause of power problems.",
    },
    {
      userId: 12,
      content:
        "Try resetting the TV to its factory settings. Sometimes a software glitch can cause such issues.",
    },
    {
      userId: 15,
      content:
        "Check if there are any visible burnt components or solder joints on the board.",
    },
    {
      userId: 21,
      content:
        "It might also be a faulty power button. Check if the button is making proper contact.",
    },
    {
      userId: 24,
      content:
        "Test the voltage outputs from the power supply board using a multimeter. Make sure they match the specifications.",
    },
    {
      userId: 29,
      content:
        "Try leaving the TV unplugged for a while, then plug it back in. Sometimes power fluctuations can cause issues.",
    },
    {
      userId: 32,
      content:
        "If you're comfortable, open the TV and look for any burnt traces or components on the circuit board.",
    },
    {
      userId: 37,
      content:
        "Consider seeking professional help if the issue persists. It could be a more complex problem.",
    },
  ],
};

export const t2 = {
  id: 2,
  userId: 4,
  question:
    "I'm trying to repair an old stereo amplifier, and there's a constant humming sound coming from the speakers. What could be causing this issue?",
  replies: [
    {
      userId: 6,
      content:
        "Check the ground connections. Poor grounding can often lead to unwanted hum.",
    },
    {
      userId: 9,
      content:
        "Inspect the input and output cables for any loose connections or frayed wires.",
    },
    {
      userId: 14,
      content:
        "Test with different audio sources to rule out any issues with the source device.",
    },
    {
      userId: 18,
      content:
        "Look for any damaged or bulging capacitors on the amplifier's circuit board.",
    },
    {
      userId: 22,
      content:
        "Try moving the amplifier to a different power outlet. Electrical interference can sometimes cause humming.",
    },
    {
      userId: 25,
      content:
        "Check if the amplifier's chassis is properly grounded. A loose ground can lead to hum problems.",
    },
    {
      userId: 28,
      content:
        "Inspect the amplifier's transformer and ensure it's not emitting any excess noise.",
    },
    {
      userId: 31,
      content:
        "Experiment with different speaker connections. Faulty speaker wires or connections can cause humming.",
    },
    {
      userId: 34,
      content:
        "Try using a ground loop isolator between the amplifier and the audio source to eliminate potential ground loop issues.",
    },
    {
      userId: 36,
      content:
        "Consider cleaning the amplifier's volume and tone control pots. Dirty pots can introduce noise.",
    },
  ],
};

export const t3 = {
  id: 3,
  userId: 8,
  question:
    "I'm working on a laptop that isn't charging properly. It only charges when the charging cable is held at a certain angle. What could be causing this issue?",
  replies: [
    {
      userId: 10,
      content:
        "The charging port might be loose or damaged. It's a common issue that could require soldering or replacement.",
    },
    {
      userId: 13,
      content:
        "Inspect the charging cable for any visible damage, such as fraying or bent connectors.",
    },
    {
      userId: 16,
      content:
        "It could be a problem with the charger itself. Test with a different charger to rule that out.",
    },
    {
      userId: 19,
      content:
        "Check if there's any debris or dirt in the charging port. A thorough cleaning might solve the issue.",
    },
    {
      userId: 23,
      content:
        "The laptop's battery might be failing. Try removing it and testing the laptop with just the charger connected.",
    },
    {
      userId: 26,
      content:
        "Look for any loose connections on the laptop's motherboard, especially around the charging circuit.",
    },
    {
      userId: 30,
      content:
        "Try gently bending the charging cable while it's plugged in to see if the connection improves temporarily.",
    },
    {
      userId: 33,
      content:
        "Inspect the charger's plug for any bent pins. Misaligned pins could cause intermittent charging.",
    },
    {
      userId: 35,
      content:
        "If you're comfortable, open the laptop and check for any broken traces near the charging port.",
    },
    {
      userId: 39,
      content:
        "Consider using a charging dock or wireless charging as a workaround if the issue can't be easily fixed.",
    },
  ],
};

export const topicsArr = [t1, t2, t3];
export const topicsObj = { 1: t1, 2: t2, 3: t3 };
